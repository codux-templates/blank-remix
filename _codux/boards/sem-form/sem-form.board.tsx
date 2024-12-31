import { createBoard } from '@wixc3/react-board';
import SemForm from '../../../src/components/sem-form/sem-form';

export default createBoard({
    name: 'SemForm',
    Board: () => <SemForm />,
});
