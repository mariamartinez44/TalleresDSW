// Serie.ts
class Serie {
    private id: number;
    private title: string;
    private channel: string;
    private seasons: number;
    private description: string;
    private link: string;
    private imageUrl: string;
  
    constructor(
      id: number,
      title: string,
      channel: string,
      seasons: number,
      description: string,
      link: string,
      imageUrl: string
    ) {
      this.id = id;
      this.title = title;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.link = link;
      this.imageUrl = imageUrl;
    }
  
    // Getters
    public getId(): number {
      return this.id;
    }
  
    public getTitle(): string {
      return this.title;
    }
  
    public getChannel(): string {
      return this.channel;
    }
  
    public getSeasons(): number {
      return this.seasons;
    }
  
    public getDescription(): string {
      return this.description;
    }
  
    public getLink(): string {
      return this.link;
    }
  
    public getImage(): string {
      return this.imageUrl;
    }
  }

  export { Serie };
  
  