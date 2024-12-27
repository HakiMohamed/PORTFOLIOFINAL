import fs from 'fs';
import path from 'path';

export class ImageManager {
  private static imageDir = path.join(process.cwd(), 'public/uploads');

  static async saveImage(file: File): Promise<string> {
    try {
      // Créer le dossier s'il n'existe pas
      if (!fs.existsSync(this.imageDir)) {
        fs.mkdirSync(this.imageDir, { recursive: true });
      }

      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(this.imageDir, fileName);
      
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      await fs.promises.writeFile(filePath, buffer);
      
      return `/uploads/${fileName}`;
    } catch (error) {
      console.error('Error saving image:', error);
      throw new Error('Failed to save image');
    }
  }

  static async deleteImage(imagePath: string): Promise<boolean> {
    try {
      const fullPath = path.join(process.cwd(), 'public', imagePath);
      await fs.promises.unlink(fullPath);
      return true;
    } catch (error) {
      console.error('Error deleting image:', error);
      return false;
    }
  }
} 