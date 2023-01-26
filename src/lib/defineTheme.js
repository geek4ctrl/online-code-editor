import { loader } from "@monaco-editor/react";

const monacoThemes = {
    active4d: "Active4D",
    "all-hallows-eve": "All Hallows Eve",
    amy: "Amy",
    "birds-of-paradise": "Birds of Paradise",
    blackboard: "Blackboard",
    "brilliance-black": "Brilliance Black",
    "brilliance-dull": "Brilliance Dull",
    "chrome-devtools": "Chrome DevTools",
    "clouds-midnight": "Clouds Midnight",
    clouds: "Clouds",
    cobalt: "Cobalt",
    dawn: "Dawn",
    dreamweaver: "Dreamweaver",
    eiffel: "Eiffel",
    "espresso-libre": "Espresso Libre",
    github: "GitHub",
    idle: "IDLE",
    katzenmilch: "Katzenmilch",
    "kuroir-theme": "Kuroir Theme",
    lazy: "LAZY",
    "magicwb--amiga-": "MagicWB (Amiga)",
    "merbivore-soft": "Merbivore Soft",
    merbivore: "Merbivore",
    "monokai-bright": "Monokai Bright",
    monokai: "Monokai",
    "night-owl": "Night Owl",
    "oceanic-next": "Oceanic Next",
    "pastels-on-dark": "Pastels on Dark",
    "slush-and-poppies": "Slush and Poppies",
    "solarized-dark": "Solarized-dark",
    "solarized-light": "Solarized-light",
    spacecadet: "SpaceCadet",
}

const defineTheme = (theme) => {
    return new Promise((res) => {
        Promise.all([
            loader.init(),
            import(`monaco-themes/themes/${monacoThemes[theme]}.json`),
        ]).then(([monaco, themeData]) => {
            monaco.editor.defineTheme(theme, themeData);
            res();
        });
    });
};

export { defineTheme };