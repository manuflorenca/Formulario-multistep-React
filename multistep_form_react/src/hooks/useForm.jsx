import { useState } from 'react';

export function UseForm(steps) {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(i, e) {
        if (e) e.preventDefault();

        // Corrigido: 'length' em vez de 'lenght'
        if (i < 0 || i >= steps.length) return;
        setCurrentStep(i);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        // Corrigido: 'length' em vez de 'lenght'
        isLastStep: currentStep + 1 === steps.length,
        isFirstStep: currentStep === 0,
    };
}