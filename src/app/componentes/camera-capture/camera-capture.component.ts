import { Component, ElementRef, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'app-camera-capture',
    templateUrl: './camera-capture.component.html',
    styleUrls: ['./camera-capture.component.css']
})
export class CameraCaptureComponent implements OnDestroy, AfterViewInit {
    @ViewChild('videoElement') videoElement: ElementRef<HTMLVideoElement>;
    @ViewChild('canvasElement') canvasElement: ElementRef<HTMLCanvasElement>;
    @ViewChild('backgroundVideo') backgroundVideo: ElementRef<HTMLVideoElement>;

    stream: MediaStream | null = null;
    isCameraActive = false;
    capturedImage: string | null = null;
    fileToUpload: Blob | null = null;
    isUploading = false;
    uploadSuccess = false;
    showSuccessMessage = false;
    uploadedImageUrl: string | null = null; // URL from server (watermarked)
    errorMessage = '';

    constructor(private backendService: BackendService) { }

    ngAfterViewInit() {
        // Ensure background video plays
        if (this.backgroundVideo && this.backgroundVideo.nativeElement) {
            const video = this.backgroundVideo.nativeElement;
            video.muted = true;
            video.play().catch(error => {
                console.log('Background video autoplay prevented:', error);
            });
        }
    }

    ngOnDestroy() {
        this.stopCamera();
    }

    async startCamera() {
        this.errorMessage = '';
        this.uploadSuccess = false;
        this.capturedImage = null;

        try {
            // Use 'user' for front/selfie camera
            this.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
            this.videoElement.nativeElement.srcObject = this.stream;
            this.isCameraActive = true;
        } catch (error) {
            this.errorMessage = 'No se pudo acceder a la cámara. Verifique los permisos.';
            console.error('Error accessing camera:', error);
        }
    }

    stopCamera() {
        if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
            this.stream = null;
        }
        this.isCameraActive = false;
    }

    capturePhoto() {
        const video = this.videoElement.nativeElement;
        const canvas = this.canvasElement.nativeElement;

        // Set canvas dimensions to match video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Get canvas context
        const context = canvas.getContext('2d');

        // Flip the image horizontally to correct the mirror effect from selfie camera
        context.translate(canvas.width, 0);
        context.scale(-1, 1);

        // Draw the video frame
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Reset transformations for future use
        context.setTransform(1, 0, 0, 1, 0, 0);

        // Convert to data URL for preview
        this.capturedImage = canvas.toDataURL('image/jpeg');

        // Convert to Blob for upload
        canvas.toBlob((blob) => {
            this.fileToUpload = blob;
        }, 'image/jpeg', 0.8);

        this.stopCamera();
    }

    retakePhoto() {
        this.capturedImage = null;
        this.fileToUpload = null;
        this.startCamera();
    }

    uploadPhoto() {
        if (!this.fileToUpload) return;

        this.isUploading = true;
        this.errorMessage = '';

        this.backendService.uploadPhoto(this.fileToUpload).subscribe({
            next: (response) => {
                this.isUploading = false;
                this.uploadSuccess = true;
                this.showSuccessMessage = true;
                setTimeout(() => this.showSuccessMessage = false, 3000);

                // Store the server URL (watermarked) for sharing
                if (response && response.data && response.data.filePath) {
                    this.uploadedImageUrl = response.data.filePath;
                    console.log('Uploaded image URL set to:', this.uploadedImageUrl);
                    console.log('Full URL will be:', this.getFullImageUrl());
                }
                console.log('Upload success - Full response:', response);
            },
            error: (error) => {
                this.isUploading = false;
                this.errorMessage = error.message || 'Error al subir la imagen.';
                console.error('Upload error:', error);
            }
        });
    }

    downloadImage() {
        if (!this.uploadedImageUrl) {
            alert('La imagen aún no ha sido subida al servidor.');
            return;
        }
        const link = document.createElement('a');
        link.href = this.getFullImageUrl();
        link.download = 'foto-fsp-2025.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    getFullImageUrl(): string {
        if (!this.uploadedImageUrl) {
            return '';
        }

        // If uploadedImageUrl already starts with http, return as is
        if (this.uploadedImageUrl.startsWith('http')) {
            return this.uploadedImageUrl;
        }
        // Otherwise, construct full URL using GLOBAL.sitio for production
        const baseUrl = GLOBAL.sitio || window.location.origin;
        return baseUrl + this.uploadedImageUrl;
    }

    async shareInstagram() {
        if (!this.uploadedImageUrl) {
            alert('Debes subir la imagen primero antes de compartir.');
            return;
        }

        const fullUrl = this.getFullImageUrl();
        const shareText = 'Fiesta F.S.P 2025!! 🎉\n#fiestafsp2025 #FederacionSanjuaninaDePatín @federacionpatin';

        // Try to use Web Share API (works on mobile)
        if ((navigator as any).share) {
            try {
                // Fetch the image to share as a file
                const response = await fetch(fullUrl);
                const blob = await response.blob();
                const file = new File([blob], 'fiesta-fsp-2025.jpg', { type: 'image/jpeg' });

                const shareData = {
                    title: 'Fiesta F.S.P 2025!!',
                    text: shareText,
                    files: [file]
                };

                // Check if we can share files
                if ((navigator as any).canShare && (navigator as any).canShare(shareData)) {
                    await (navigator as any).share(shareData);
                } else {
                    // Fallback: share just text and let user choose Instagram
                    await (navigator as any).share({
                        title: 'Fiesta F.S.P 2025!!',
                        text: shareText,
                        url: fullUrl
                    });
                }
            } catch (error: any) {
                console.error('Error sharing:', error);
                // If user cancelled, don't show alert
                if (error.name !== 'AbortError') {
                    if (confirm('No se pudo compartir directamente. ¿Deseas descargar la imagen para compartirla manualmente en Instagram Stories?')) {
                        this.downloadImage();
                        // Show instructions
                        setTimeout(() => {
                            alert('💡 Para compartir en Instagram Stories:\n\n1. Abre Instagram\n2. Toca tu foto de perfil para crear una historia\n3. Selecciona la imagen descargada\n4. Agrega el texto: #fiestafsp2025 @federacionpatin\n5. ¡Comparte!');
                        }, 500);
                    }
                }
            }
        } else {
            // Desktop or browser without share support
            if (confirm('Para compartir en Instagram Stories, descarga la imagen y súbela manualmente.\n\n¿Descargar ahora?')) {
                this.downloadImage();
                setTimeout(() => {
                    alert('💡 Para compartir en Instagram Stories:\n\n1. Abre Instagram en tu móvil\n2. Toca tu foto de perfil para crear una historia\n3. Selecciona la imagen descargada\n4. Agrega el texto: #fiestafsp2025 @federacionpatin\n5. ¡Comparte!');
                }, 500);
            }
        }
    }

    shareFacebook() {
        if (!this.uploadedImageUrl) {
            alert('Debes subir la imagen primero antes de compartir.');
            return;
        }
        const fullUrl = this.getFullImageUrl();
        const encodedUrl = encodeURIComponent(fullUrl);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
    }

    // Fallback for file input
    onFileSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.fileToUpload = file;

            // Create preview
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.capturedImage = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }
}
