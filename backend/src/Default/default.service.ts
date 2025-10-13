export class DefaultService<
  Model,
  Create,
  Update,
  Delegate extends { 
    findMany: (...args: any) => any;
    findUnique: (...args: any) => any;
    findFirst: (...args: any) => any;
    create: (...args: any) => any;
    update: (...args: any) => any;
    delete: (...args: any) => any;
  },
  Where,
  Include = unknown
> {
  constructor(protected delegate: Delegate) {}

  async getAll(include?: Include): Promise<Model[]> {
    return this.delegate.findMany({ include });
  }

  async getOne(where: Where, include?: Include): Promise<Model | null> {
    return this.delegate.findFirst({ where, include });
  }

  async create(data: Create): Promise<Model> {
    return this.delegate.create({ data });
  }

  async update(id: number, data: Update): Promise<Model> {
    return this.delegate.update({ where: { id }, data });
  }

  async delete(id: number): Promise<Model> {
    return this.delegate.delete({ where: { id } });
  }

  async getByConditions(where: Where, include?: Include): Promise<Model[]> {
    return this.delegate.findMany({ where, include });
  }
}
