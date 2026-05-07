export enum Tela {
    LOADING = "LOADING",
    LOGIN = "LOGIN",
    MAIN = "MAIN",


    MISSING = "MISSING"
};

export type ChangeScreen = {
    changeScreen: (telaAtual: Tela) => void;
};

export type DefaultProps = {
    changeLogin: (isLogged: boolean) => void;
    changeScreen: (telaAtual: Tela) => void;
};
