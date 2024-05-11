/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [], // Lista vacía significa que no hay restricciones específicas de dominio
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
        {
            protocol: 'https',
            hostname: '**'
        }
        ]
      },
};

export default nextConfig;
