export default {
    parse(error) {
        const status = error.response.status;

        switch (status) {
            case 404: {
                return 'Request failed. Request endpoint not found on the server';
            }
            case 500: {
                return 'This is rephrased error message. Please try again later';
            }
            case 401: {
                return 'Authentication problem. Please try again'
            }
        }

    }
}
