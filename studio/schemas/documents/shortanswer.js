export default {
    name: 'shortanswer',
    type: 'document',
    title: 'Short Answer Question',
    __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Short Answer Prompt',
      name: 'saprompt',
      type: 'string'
    },
    {
      title: 'Short Answer Response',
      name: 'sarepsonse',
      type: 'string'
    }
  ]
}