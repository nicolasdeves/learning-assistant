export class DefaultService<
  Model,
  Create,
  Update,
  Delegate extends { 
    findMany: (...args: any) => any;
    findUnique: (...args: any) => any;
    create: (...args: any) => any;
    update: (...args: any) => any;
    delete: (...args: any) => any;
  },
  Where
> {
  constructor(protected delegate: Delegate) {}

  async getAll(): Promise<Model[]> {
    return this.delegate.findMany();
  }

  async getOne(id: number): Promise<Model | null> {
    return this.delegate.findUnique({ where: { id } });
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

  async getByConditions(where: Where): Promise<Model[]> {
    return this.delegate.findMany({ where })
  }
 }
