export default {
    parse(error) {
        const status = error.response.status;
        const message = error.response.message ? error.response.message : error.response.data;
        const response = error.response;

        switch(status){
            case 404: {
                return 'Resource not found :('
            }
        }

    }
}
