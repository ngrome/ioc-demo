import 'reflect-metadata';

interface Ctor<T> {
  new(...args: any[]): T;
}

type GenericClassDecorator<T> = (target: T) => void;

export const Service = (): GenericClassDecorator<Ctor<any>> => {
  return (target: Ctor<any>) => {
    console.log('Registro: ', target, ' :: ', Reflect.getMetadata('design:paramtypes', target));
  };
};

export class EasyIoC {

  private ioc: { [index: string]: Ctor<any> } = {};

  public register(key: string, value: Ctor<any>) {
      this.ioc[key] = value;
      // console.log('Container:', this._ioc);
  }

  public resolve(target: any) {
    // console.log('>>>Metadati', target, Reflect.getMetadata('design:paramtypes', target));
    // tokens are required dependencies, while injections are resolved tokens from the Injector
    const dependencies = Reflect.getMetadata('design:paramtypes', target) || [];
    console.log('Dependencies: ', dependencies);
    // Per ogni Token (DIPENDENZA), vado a costruire l'oggetto,
    // prima però verifico se ho ulteriori dipendenze e se la classe è registrata nel container
    const injections = dependencies.map((parameter: any, index: number) => {

      const newTarget = this.ioc[parameter.name];

      if (Reflect.getMetadata('design:paramtypes', newTarget)) {
        console.log('RILEVATA DIPENDENZA ULTERIORE', newTarget);
        return this.resolve(newTarget);
      } else {
        console.log(parameter, ' + ', parameter.name, ' + ', this.ioc.hasOwnProperty(parameter.name));
        if (!this.ioc.hasOwnProperty(parameter.name)) {
          throw new Error(`Impossible to resolve type ${parameter.name}`);
        }
        return new this.ioc[parameter.name]();
      }
    });


    console.log('Injections', injections);
    return new target(...injections);
  }

}
