import { defineTable, column, defineDb } from 'astro:db';

const Pessoa = defineTable({
	columns: {
	  nome: column.text(),
	  ativo: column.boolean({ default: true }),
	}
  })

// https://astro.build/db/config
export default defineDb({
	tables: {
		Pessoa,
	},
});
