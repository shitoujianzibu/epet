import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/dog/indexpage/homepage', {
  code: 0, // 成功
  data: data.dog.homepage
})
