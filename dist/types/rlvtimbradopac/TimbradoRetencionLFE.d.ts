import { AxiosResponse } from 'axios';
declare function TimbradoRetencionLFE(usuario: string, clave: string, RFC: string, Base64: string): Promise<AxiosResponse | never>;
export default TimbradoRetencionLFE;