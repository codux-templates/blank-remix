import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '_codux/component-wrappers/component-wrapper';

export default createBoard({
    name: 'NewBoard',
    Board: () => (
        <ComponentWrapper>
            <ContentSlot />
        </ComponentWrapper>
    ),
});
