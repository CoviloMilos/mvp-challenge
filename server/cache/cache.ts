export class CacheBase<T> {
  protected data: Record<string, T> = {};

  public setValue(key: string, value: T): void {
    if (!this.data[key]) {
      this.data[key] = value;
    }
  }

  public getValue(key: string): T | undefined {
    return this.data[key];
  }

  public clear(): void {
    this.data = {};
  }

  public getData(): Record<string, T> {
    return this.data;
  }

  public delete(key: string): T {
    const value = this.data[key];
    delete this.data[key];
    return value;
  }

  public exist(key: string): boolean {
    return !!this.data[key];
  }

  public getValues(): T[] {
    return Object.values(this.data);
  }
}
