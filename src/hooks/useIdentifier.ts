export default function useIdentifier(length: number): string {
	const chars = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'v',
		'w',
		'x',
		'y',
		'z'
	]

	let id = ''

	let i = 0
	while (i < length) {
		i += 1

		let x = Math.round(Math.random() * 25)

		id = id + chars[x]
	}

	return id
}
