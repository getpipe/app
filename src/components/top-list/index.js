import React, { Component } from 'react';
import Top from '../top';
import './style.css'

let tasks = [
  { 
    type: 'Интерфейсная!!!!', 
    date: '10 февраля',
    author: 'Вадим Макеев',
    title: 'Описать в ридми как завести сайт локально',
    description: 'На самом деле, всё расписать в #68, а оттуда уже взять выжимку про запуск и тесты для ридми. А там ещё нужно про перезагрузку, тесты, линтер.',
    id: '1'
  },
  { 
    type: 'Интерфейсная', 
    date: '10 февраля',
    author: 'Вадим Макеев',
    title: 'Описать в ридми как завести сайт локально',
    description: 'На самом деле, всё расписать в #68, а оттуда уже взять выжимку про запуск и тесты для ридми. А там ещё нужно про перезагрузку, тесты, линтер.',
    id: '2'
  },
  { 
    type: 'Интерфейсная', 
    date: '10 февраля',
    author: 'Вадим Макеев',
    title: 'Описать в ридми как завести сайт локально',
    description: 'На самом деле, всё расписать в #68, а оттуда уже взять выжимку про запуск и тесты для ридми. А там ещё нужно про перезагрузку, тесты, линтер.',
    id: '3'
  }
];

class TopList extends Component {
  state = {
    items: tasks
  }
  render() {
    let tsks = this.state.items
    return (
      <div class="section">
          {tsks.map(function(tsk){
              return (
                <div class="col" key={tsk.id}>
                    <Top
                      type={tsk.type}
                      date={tsk.date}
                      author={tsk.author}
                      title={tsk.title}
                      description={tsk.description}
                    />
                </div>
              );
          })} 
      </div>
    );
  }
}

export default TopList;

