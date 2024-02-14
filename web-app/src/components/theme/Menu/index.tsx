export default function Menu() {
  return (
    <nav>
      <ul className="flex items-center">
        <li>
          <a
            className="block p-5 border-y-2 border-white text-sm font-light hover:border-b-black hover:font-medium transition-all"
            href="/products"
          >
            Novidades
          </a>
        </li>
        <li>
          <a
            className="block p-5 border-y-2 border-white text-sm font-light hover:border-b-black hover:font-medium transition-all"
            href="/cart"
          >
            Masculino
          </a>
        </li>
        <li>
          <a
            className="block p-5 border-y-2 border-white text-sm font-light hover:border-b-black hover:font-medium transition-all"
            href="/cart"
          >
            Feminino
          </a>
        </li>
        <li>
          <a
            className="block p-5 border-y-2 border-white text-sm font-light hover:border-b-black hover:font-medium transition-all"
            href="/cart"
          >
            Infantil
          </a>
        </li>
        <li>
          <a
            className="block p-5 border-y-2 border-white text-sm font-light hover:border-b-black hover:font-medium transition-all"
            href="/cart"
          >
            Promoção
          </a>
        </li>
      </ul>
    </nav>
  );
}
