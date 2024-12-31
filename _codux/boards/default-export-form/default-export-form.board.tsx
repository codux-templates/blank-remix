import { createBoard } from '@wixc3/react-board';
import  DefaultExportForm  from '../../../src/components/default-export-form/default-export-form';

export default createBoard({
    name: 'DefaultExportForm',
    Board: () => <DefaultExportForm />,
});
