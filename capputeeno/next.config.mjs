/** @type {import('next').NextConfig} */

/** 
 *1) compiler: {styledComponents: true} => Inserido para conseguir rodar o styled
 * sem problema nenhum vamos inserir um parametro de compilação do next para
 *  indicar que estamos usando o styledComponet
 */

const nextConfig = {
    compiler: {
        styledComponents: true
    }
};

export default nextConfig;
