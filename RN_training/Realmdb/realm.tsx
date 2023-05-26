import Realm from 'realm';
import {createRealmContext} from '@realm/react';
import {ObjectId} from 'bson';

export class Todo extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  completed!: boolean;
  createdAt!: Date;
  static schema = {
    name: 'Todo',
    properties: {
      _id: 'objectId',
      description: 'string',
      completed: {type: 'bool', default: false},
      createdAt: 'date',
    },
  };
}
export const todoContext = createRealmContext({
  schema: [Todo],
  onFirstOpen(realm: {
    create: (
      arg0: string,
      arg1: {
        _id: ObjectId;
        description: string;
        completed: boolean;
        createdAt: Date;
      },
    ) => void;
  }) {
    realm.create('Todo', {
      _id: new Realm.BSON.ObjectId(),
      description: 'Learn react native',
      completed: false,
      createdAt: new Date(),
    });
  },
});
