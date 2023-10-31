export default {
  name: 'art',
  type: 'document',
  title: 'Artes',
  fields: [
    {
      title: 'Título da Arte',
      name: 'title',
      type: 'string',
      validation: (Rule: any) =>
        Rule.required().min(2).max(48).warning('O título deve conter de 2 a 48 caracteres'),
    },
    {
      title: 'Descrição da Arte',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule: any) => {
        Rule.required().min(2).max(100).warning('A descrição deve conter de 10 a 100 caracteres')
      },
    },
    {
      title: 'Arte',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Título Alternativo',
          validation: (Rule: any) => {
            Rule.required()
              .min(2)
              .max(30)
              .warning('O título alternativo deve conter de 2 a 30 caracteres')
          },
        },
      ],
      validation: (Rule: any) => {
        Rule.required()
      },
    },
    // {
    //   title: 'Data da Criação',
    //   name: 'date',
    //   type: 'date',
    //   options: {
    //     dateFormat: 'DD-MM-YYYY',
    //     calendarTodayLabel: 'Today',
    //   },
    //   validation: (Rule: any) => {
    //     Rule.required()
    //   },
    // },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule: any) => {
        Rule.required()
      },
    },
  ],
}
