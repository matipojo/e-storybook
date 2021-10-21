import React from 'react';
import { default as Component } from 'elementor-app/ui/modal/modal-section';
import Knobs from 'e-storybook/view/utils/knobs';

export const Default = () => {
    const knobs = Knobs.getKnobs( Component );

    return <Component { ...knobs }></Component>;
};
