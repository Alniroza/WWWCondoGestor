
export function CRUDResolver(name, model, mongoscheme) {
  const CRUDResolver = {
    Query: {
      "findOne": (id) => {
        return id;
      },
      findAll(){
        return ['1','2','3']
      }
    },
    Mutation: {
      add(input){
        return input
      },
      update(id, input){
        return input
      },
      delete(id){
        return 'Borrado'
      }
    }
  }

  return CRUDResolver;
}