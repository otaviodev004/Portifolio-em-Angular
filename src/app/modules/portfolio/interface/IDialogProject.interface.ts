export interface IDialogProject{
    src: string,
      alt: string,
      title: string,
      with: string,
      height: string,
      description: string,
      links: [
        {
          name: string,
          href: string,
        },
      ];
}