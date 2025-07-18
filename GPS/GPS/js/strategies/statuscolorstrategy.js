class StatusColorStrategy {
    static getColor(status) {
        switch (status) {
            case 'Cursando':
                return 'bg-green-100 text-green-700';
            case 'Pendente':
                return 'bg-yellow-100 text-yellow-700';
            case 'Concluída':
                return 'bg-gray-100 text-gray-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    }
}