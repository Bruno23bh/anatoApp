export interface FaqContent {
    title: string;
    helpListHeader1: string;
    helpListInstalacionItems: [
        {
            title: string;
            expand: boolean;
            icon: string;
            description: string;
            firstImagePath: string;
            secondImagePath?: string;
        }
    ];
}
