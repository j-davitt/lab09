'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  get(id) {
    if(id){
      return this.model.findOne({where: {id}});
    } else {
      return this.model.findAll();
    }
  }

  create(record) {
    return this.model.create(record);
  }

  update(id, record) {
    return this.model.update(record, {where: {id}});
  }

  delete(id) {
    return this.model.destroy({where: {id}});
  }

}

module.exports = Collection;

