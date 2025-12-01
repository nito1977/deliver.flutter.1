export class Category {
  category_id: string;
  category_name: string;
  category_slug: string;
  category_description: string;
  category_image: string;

  constructor(data: any) {
    this.category_id = data.category_id;
    this.category_name = data.category_name;
    this.category_slug = data.category_slug;
    this.category_description = data.category_description;
    this.category_image = data.category_image || ''; // Asigna una cadena vacía si no hay imagen
  }
}
