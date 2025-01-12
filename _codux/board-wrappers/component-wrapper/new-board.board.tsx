import { PropsWithChildren } from 'react';
import { createRemixStub } from '@remix-run/testing';
import { ROUTES } from '~/router/config';
import { ContentSlot, createBoard } from '@wixc3/react-board';

export interface ComponentWrapperProps extends PropsWithChildren {
    loaderData?: Record<string, unknown>;
}

export function ComponentWrapper({ children, loaderData }: ComponentWrapperProps) {
    const RemixStub = createRemixStub([
        {
            Component: () => children,
            children: Object.values(ROUTES).map(({ path }) => ({ path }))
        },
    ]);

    return <RemixStub hydrationData={{ loaderData }} />;
}

export default createBoard({
    name: 'NewBoard',
    Board: () => (
        <ComponentWrapper>
            <ContentSlot />
        </ComponentWrapper>
    ),
});
