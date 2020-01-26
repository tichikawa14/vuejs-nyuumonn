import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ストアの定義
const store = new Vuex.Store({
  state: {
    // タスクの初期ステート
    tasks: [
      {
        id: 1,
        name: '牛乳を買う',
        labelIds: [1, 2],
        done: false
      },
      {
        id: 2,
        name: 'Vue の本を買う',
        labelIds: [1, 3],
        done: true
      }
    ],

    labels: [
      {
        id: 1,
        text: '買い物'
      },
      {
        id: 2,
        text: '食糧'
      },
      {
        id: 3,
        text: '本'
      }
    ],

    // 次に追加するタスク、ラベルの ID
    // 実際のアプリではサーバーで生成したり、UUID を使ったりする
    nextTaskId: 3,
    nextLabelId: 4,
    filter: null
  },

  getters: {
    filteredTasks (state) {
      if (!state.filter) {
        return state. tasks
      }

      return state.tasks.filter(task => {
        return task.labelIds.indexOf(state.filter) >= 0
      })
    }
  },
  mutations: {
    addTask (state, { name, labelIds }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        labelIds,
        done: false
      })
      // 次に追加されるタスクに付与するIDを更新する
      state.nextTaskId++
    },

    toggleTaskStatus (state, { id }) {
      const filtered = state.tasks.filter(task => {
        return task.id === id
      })

      filtered.forEach(task => {
        task.done = !task.done
      })
    },

    addLabel (state, { text }) {
      state.labels.push({
        id: state.nextLabelId,
        text
      })

      state.nextLabelId++
    },
    changeFilter (state, { filter }) {
      state.filter = filter
    }
  },
})

// ストアをエクスポート
export default store
