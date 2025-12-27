<?php
// api/panel.php

require_once 'db.php';

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'list_habilitados':
        listHabilitados($pdo);
        break;
    case 'list_clubes':
        listClubes($pdo);
        break;
    case 'mark_player':
        markPlayer($pdo);
        break;
    default:
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid panel action']);
        break;
}

function listHabilitados($pdo) {
    // 1. Get Filters from Request
    $anio = isset($_GET['anio']) ? $_GET['anio'] : date('Y');
    $clubId = isset($_GET['clubId']) ? $_GET['clubId'] : '';
    $sexo = isset($_GET['sexo']) ? $_GET['sexo'] : '';
    $clasif = isset($_GET['clasif']) ? $_GET['clasif'] : '';
    $anioNac = isset($_GET['anioNac']) ? $_GET['anioNac'] : ''; // Año fecha nac.
    $view = $_GET['view'] ?? 'habilitados';

    // 2. Build Dynamic Query Parts
    
    // $anioReporte: In the user query, it is appended to the ON clause
    // Example: AND int_cuotas_verificadas.anio = 2025
    $anioReporte = " AND int_cuotas_verificadas.anio = '$anio'";

    $filtroClub = "";
    if ($clubId) {
        $filtroClub = " AND int_jugador.idclub = '$clubId'";
    }

    $filtroSexo = "";
    if ($sexo) {
        $filtroSexo = " AND int_jugador.Sexo = '$sexo'";
    }

    $filtroClasificado = "";
    if ($clasif) {
        $filtroClasificado = " AND int_jugador.clasificado = '$clasif'";
    }

    $filtroAnio = "";
    if ($anioNac) {
        // Handle both native DATE types and string formats (dd/mm/yyyy or yyyy-mm-dd)
        $filtroAnio = " AND (YEAR(int_jugador.Fecnac) = '$anioNac' OR RIGHT(int_jugador.Fecnac, 4) = '$anioNac')"; 
    }

    $filtroMarca = "";
    $joinHistorial = "";
    $selectHistorial = "";

    if ($view === 'habilitados') {
        $filtroMarca = " AND (
            ( int_jugador.marca = 'CAP1' ) OR 
            ( int_jugador.marca = 'CAP2' ) OR 
            ( int_jugador.marca = 'CAP3' ) OR 
            ( int_jugador.marca = 'CAP4' ) OR 
            ( int_jugador.marca = 'CAP5' ) OR 
            ( int_jugador.marca = 'CAP6' ) OR 
            ( int_jugador.marca = 'CAP7' ) OR 
            ( int_jugador.marca = 'CAP8' ) OR 
            ( int_jugador.marca = 'CAP9' ) OR 
            ( int_jugador.marca = 'CAP10' ) OR 
            ( int_jugador.marca = 'CAP11' ) OR 
            ( int_jugador.marca = 'CAP12' )
        )";
    } elseif ($view === 'bajas') {
        $filtroMarca = " AND (int_jugador.marca NOT LIKE 'CAP%' OR int_jugador.marca IS NULL OR int_jugador.marca = '')";
    } elseif ($view === 'nuevas-bajas') {
        $selectHistorial = ", hm.fecha as fecha_hist, hm.usuario as usuario_hist, hm.accion as accion_hist";
        $joinHistorial = " INNER JOIN (
            SELECT idnumerocarnet, MAX(id) as max_id 
            FROM historial_marcas 
            WHERE accion = 'BAJA' 
            GROUP BY idnumerocarnet
        ) latest_hm ON int_jugador.idnumerocarnet = latest_hm.idnumerocarnet
        INNER JOIN historial_marcas hm ON hm.id = latest_hm.max_id";
    } elseif ($view === 'nuevas-altas') {
        $selectHistorial = ", hm.fecha as fecha_hist, hm.usuario as usuario_hist, hm.accion as accion_hist";
        $joinHistorial = " INNER JOIN (
            SELECT idnumerocarnet, MAX(id) as max_id 
            FROM historial_marcas 
            WHERE accion LIKE 'CAP%' 
            GROUP BY idnumerocarnet
        ) latest_hm ON int_jugador.idnumerocarnet = latest_hm.idnumerocarnet
        INNER JOIN historial_marcas hm ON hm.id = latest_hm.max_id";
    }

    // 3. Construct the Query
    $sql = "SELECT 
                int_jugador.foto, 
                int_jugador.idnumerocarnet, 
                int_jugador.Apellido, 
                int_jugador.Nombre, 
                int_jugador.clasificado, 
                int_jugador.Fecnac, 
                int_jugador.Documento, 
                int_jugador.nrotarjeta, 
                int_jugador.idclub, 
                int_clubes.Nombreclub as club, 
                int_jugador.Telefono, 
                int_jugador.Domicilio, 
                int_jugador.Provincia, 
                int_jugador.Sexo, 
                int_jugador.Disciplina, 
                int_jugador.Actividad, 
                int_jugador.email, 
                int_jugador.licencia, 
                int_jugador.Marca, 
                int_cuotas_verificadas.c1, 
                int_cuotas_verificadas.c2, 
                int_cuotas_verificadas.c3, 
                int_cuotas_verificadas.ct
                $selectHistorial
            FROM int_jugador 
            LEFT JOIN int_clubes ON (int_clubes.idclub = int_jugador.idclub) 
            LEFT JOIN int_cuotas_verificadas ON (int_cuotas_verificadas.idnumerocarnet = int_jugador.idnumerocarnet $anioReporte) 
            $joinHistorial
            WHERE int_jugador.idclub > 0 
            $filtroMarca
            $filtroClub $filtroSexo $filtroClasificado $filtroAnio
            ORDER BY idnumerocarnet ASC";

    try {
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode(['status' => 'success', 'data' => $data]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Database error: ' . $e->getMessage()]);
    }
}

function markPlayer($pdo) {
    // 1. Get Data from Request
    $idnumerocarnet = $_GET['idnumerocarnet'] ?? '';
    $mark = ($_GET['mark'] ?? 'true') === 'true';
    $sistUser = $_GET['username'] ?? 'System';

    if (!$idnumerocarnet) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Missing carnet ID']);
        return;
    }

    // 2. Determine prefix and values
    $mesactual = (int)date('m');
    $marca = $mark ? "CAP" . $mesactual : "";
    $clasificado = $mark ? "2025" : ""; // Assuming 2025 as per request
    $activado = $mark ? 1 : 0;
    $accion = $mark ? $marca : "BAJA";
    $fechaLong = date('Y-m-d H:i:s');

    try {
        $pdo->beginTransaction();

        // 3. Update Player
        $sql = "UPDATE `int_jugador` 
                SET `Marca` = :marca, 
                    `Clasificado` = :clasificado, 
                    `Activado` = :activado 
                WHERE `idnumerocarnet` = :id";
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':marca' => $marca,
            ':clasificado' => $clasificado,
            ':activado' => $activado,
            ':id' => $idnumerocarnet
        ]);

        // 4. Registry in historial_marcas
        $sql2 = "INSERT INTO `historial_marcas` (`id`, `idnumerocarnet`, `fecha`, `accion`, `usuario`) 
                 VALUES (NULL, :id, :fecha, :accion, :usuario)";
        
        $stmt2 = $pdo->prepare($sql2);
        $stmt2->execute([
            ':id' => $idnumerocarnet,
            ':fecha' => $fechaLong,
            ':accion' => $accion,
            ':usuario' => $sistUser
        ]);

        $pdo->commit();
        echo json_encode(['status' => 'success', 'message' => 'Player marked/unmarked successfully']);

    } catch (PDOException $e) {
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Database error: ' . $e->getMessage()]);
    }
}
?>
