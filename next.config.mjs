/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      ppr: true, // Corrigir para valor booleano
      serverActions: true, // Manter o experimental serverActions ativado
    },
  };
  
  export default nextConfig;