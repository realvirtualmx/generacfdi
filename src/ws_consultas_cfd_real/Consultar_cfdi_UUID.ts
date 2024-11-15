import axios, { AxiosResponse, AxiosError } from 'axios';
import { WS_CONSULTAS_CFD_REAL } from '../constants/constants';

async function Consultar_cfdi_UUID(
    UUID: string,
    fecha: string,
    Usuario_admin: string,
    Clave_admin: string,
    Rfc_admin: string
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(WS_CONSULTAS_CFD_REAL.URL_CONSULTAR_CFDI_UUID, {
            UUID,
            fecha,
            Usuario_admin,
            Clave_admin,
            Rfc_admin
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
        throw new Error(`Error in Consultar_cfdi_UUID npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default Consultar_cfdi_UUID;