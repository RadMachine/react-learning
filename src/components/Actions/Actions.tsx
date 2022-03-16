import React, {FC} from 'react'
import {CustomSelect} from '../UI/Select/CustomSelect'
import Input from '../UI/Input/input'
import {IActions, IPost, SetAction} from '../App'
import classes from './actions.module.css'

interface ActionsProps {
  actions: IActions,
  setAction: SetAction
}

export const Actions: FC<ActionsProps> = ({
  actions,
  setAction,
}) => {

  return <div className={classes.actions}>
    <CustomSelect
      defaultValue="Сортировка"
      value={actions.sort ?? ''}
      options={[
        {value: 'id', text: 'По ID'},
        {value: 'title', text: 'По теме'},
      ]}
      onChange={(evt) => {setAction('sort', evt.target.value as keyof IPost)}}
    />
    <Input
      placeholder="Поиск"
      value={actions.query}
      onChange={(evt) => {setAction('query', evt.target.value)}}
    />
  </div>
}
