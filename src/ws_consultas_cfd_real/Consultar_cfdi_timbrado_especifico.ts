import axios, { AxiosResponse, AxiosError } from 'axios';
import { WS_CONSULTAS_CFD_REAL } from '../constants/constants';

async function Consultar_cfdi_timbrado_especifico(
    rfc_emisor: string,
    rfc_receptor: string,
    serie: string,
    folio: string,
    fecha_emision: string,
    total: string,
    Usuario_admin: string,
    Clave_admin: string
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(WS_CONSULTAS_CFD_REAL.URL_CONSULTAR_CFDI_TIMBRADO_ESPECIFICO, {
            rfc_emisor,
            rfc_receptor,
            serie,
            folio,
            fecha_emision,
            total,
            Usuario_admin,
            Clave_admin
        });

        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                return axiosError.response;
            } else if (axiosError.request) {
                console.error('Request error:', axiosError.request);
                throw new Error("Error de red: No se recibió respuesta del servidor");
            }
        }
        throw new Error(`Error in Consultar_cfdi_timbrado_especifico npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default Consultar_cfdi_timbrado_especifico;