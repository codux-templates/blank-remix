import { createBoard } from '@wixc3/react-board';
import { Dropy } from '../../../src/components/dropy/dropy';

export default createBoard({
    name: 'Dropy',
    Board: () => <Dropy />,
});
