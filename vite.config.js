import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "gzip", // Utilise gzip pour la compression
      ext: ".gz", // Extension pour les fichiers compressés
      deleteOriginFile: false, // Garde les fichiers originaux après compression
    }),
  ],
  // Configuration pour le build
  build: {
    sourcemap: true, // Génération des source maps pour l'analyse des bundles
  },
});
