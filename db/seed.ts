import { db, Pessoa } from 'astro:db';

export default async function seed() {
	await db.insert(Pessoa).values([
		{ nome: "JEUDI PRANDO" },
		{ nome: "ALISSON" },
		{ nome: "GUSTAVO" },
	])
}
