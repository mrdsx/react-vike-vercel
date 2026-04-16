import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";

/// <reference types="@batijs/core/types" />

export default defineConfig({
  plugins: [vike(), react()],
});
