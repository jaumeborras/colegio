# Contenido del sitio web — Colegio San Cayetano

Referencia completa de todos los textos, datos y enlaces publicados en la web. Actualizar cuando cambie el contenido de cualquier página.

---

## Contexto del proyecto

- **Trabajo:** Jaime ha sido contratado para rediseñar la web del Colegio San Cayetano.
- **Situación actual:** El colegio tiene su web en WordPress (`colegiosancayetano.com`) y no quiere cambiarse de plataforma.
- **Lo que hay hecho:** El diseño nuevo ya está construido en Next.js y desplegado en https://colegio-gold.vercel.app — sirve como maqueta de referencia visual exacta.
- **Plan:** Portar el diseño de Next.js al WordPress existente del colegio creando un tema hijo. Jaime gestionará el contenido él mismo.
- **Próximo paso:** Jaime está esperando acceso al panel de administración de WordPress (~2026-04-29). Una vez dentro, revisar qué tema usan y si tienen page builder (Elementor, WPBakery, etc.) para decidir el enfoque técnico.

---

## Identidad del colegio

| Campo | Valor |
|---|---|
| Nombre | Colegio San Cayetano |
| Dirección | Av. Picasso, 21 · 07014 Palma de Mallorca, Islas Baleares |
| Teléfono | 971 22 05 75 |
| Email | csc@colegiosancayetano.com |
| Titularidad | Privado — Orden Teatina (Clérigos Regulares) |
| Director | Pablo Guerrero Pacheco, C.R. |
| Alumnos | Más de 1.800 |
| Años de historia | Más de 60 |
| Idiomas | Cuatrilingüe: castellano, catalán, inglés, alemán (desde 5º Primaria) |

---

## Home (`/`)

### Hero
- Imagen de fondo: `/fotos/dron.jpg` (foto aérea fija, sin slideshow)
- Overlay oscuro al 55% para legibilidad
- Tag superior: "COLEGIO SAN CAYETANO" / "PALMA DE MALLORCA" (dos líneas)
- Titular serif centrado: "Educamos personas con valores / para un futuro global" (animación de entrada)
- Subtítulo inferior: "Desde 1962"
- Flecha de scroll visible abajo al centro
- Hero height: 88svh (deja asomar la sección siguiente)
- Botón "Admisiones" en top-right eliminado (Admisiones está en el nav principal)

### Sección intro — Misión
> Somos un colegio privado con más de 60 años de historia en Palma de Mallorca de la Orden Teatina.
> Educación trilingüe (castellano, catalán, inglés), Bachillerato Internacional y más de 1.800 alumnos que confían en nosotros cada día.
> Ofrecemos un proyecto educativo integral donde cada alumno desarrolla todo su potencial en un entorno multilingüe con proyección internacional.

### Por qué elegirnos
**Tag:** ¿Por qué elegirnos?  
**Título:** Un proyecto educativo diferente  
4 tarjetas en grid 1/2/4 cols:

| Título | Descripción |
|---|---|
| Multilingüismo | Castellano, catalán e inglés en todas las etapas. Alemán a partir de quinto de primaria. |
| Excelencia académica | Educación de calidad con buenos resultados. |
| Atención personalizada | Profesores y orientadores acompañan a los estudiantes durante el proceso. |
| Educación en valores | Nuestro proyecto educativo va más allá de los resultados académicos. |

### Stats
Sección azul con imagen de fondo al 8% de opacidad, líneas doradas arriba y abajo.
| Valor | Etiqueta |
|---|---|
| +1.800 | Alumnos |
| +60 | Años de historia |
| 4 | Idiomas |
| 1.800 | m² de instalaciones |

### Etapas educativas (tarjetas foto)
6 etapas en grid 2 cols (móvil) / 3 cols (desktop). Cada tarjeta muestra rango de edad encima del nombre.
| Etapa | Edades | Imagen | Ruta |
|---|---|---|---|
| Escoleta | 1–2 años | `/fotos/escoleta.jpg` | `/etapas/escoleta` |
| Infantil | 3–5 años | `/fotos/infantil.jpg` | `/etapas/infantil` |
| Primaria | 6–11 años | `/fotos/primaria.png` | `/etapas/primaria` |
| Secundaria | 12–15 años | `/fotos/secundaria.jpg` | `/etapas/secundaria` |
| Bachillerato | 16–17 años | `/fotos/bachillerato.jpg` | `/etapas/bachillerato` |
| IB | 16–19 años | `/fotos/IB.jpg` | `/etapas/ib` |

### Accesos rápidos
| Etiqueta | Destino |
|---|---|
| Alexia (familias) | https://web2.alexiaedu.com/ACWeb/LogOn.aspx?key=bhaA17N5NZc%3d |
| ManageBac (IB) | https://colegiosancayetano.managebac.com/ |
| Biblioteca | https://biblioteca.colegiosancayetano.com/ |
| Admisiones | `/admisiones` |
| Comedor | `/comedor` |
| Extraescolares | `/extraescolares` |

### Bachillerato Internacional (sección)
- Imagen: `/fotos/IB.jpg`
- Título: "Programa Diploma IB"
- Texto: "El Programa Diploma del IB es un currículo internacional de dos años reconocido por las mejores universidades del mundo. Rigor académico, pensamiento crítico y perspectiva global."
- Enlaces:
  - Ver programa IB → `/etapas/ib`
  - Programa Diploma IB → https://sites.google.com/csc.edu.es/csc22esp-ibprograma (externo)
  - IB-ManageBac → https://colegiosancayetano.managebac.com/ (externo)
  - Biblioteca → https://biblioteca.colegiosancayetano.com/ (externo)

### Últimas noticias
| # | Título | Fuente | Fecha | Imagen | Enlace |
|---|---|---|---|---|---|
| 1 | Colegio San Cayetano: la educación integral que empieza en la Escoleta y culmina en el Bachillerato Internacional | Diario de Mallorca | 28 abril 2026 | `/fotos/noticias1.png` | https://www.diariodemallorca.es/mallorca/2026/04/28/colegios-privados-mallorca-bachillerato-internacional-bc-129564438.html |
| 2 | San Cayetano: una ventana al mundo a través del Bachillerato Internacional | Ultima Hora | 22 abril 2026 | `/fotos/noticias2.jpg` | https://www.ultimahora.es/monograficos/centros-privados-concertados/2026/04/22/14773/san-cayetano-ventana-mundo-traves-del-bachillerato-internacional.html |
| 3 | Un colegio de Palma, líder mundial en lectura en inglés entre más de 9.000 escuelas | Diario de Mallorca | 25 febrero 2026 | `/fotos/noticias3.png` | https://www.diariodemallorca.es/mallorca/2026/02/25/colegio-palma-lider-mundial-lectura-dvl-127248507.html |

### Noticias — layout editorial
- Primera noticia: tarjeta destacada a ancho completo (imagen izquierda + texto derecha)
- Noticias 2 y 3: dos columnas iguales debajo

### CTA Admisiones
Sección con marquee de fotos de vida escolar (scroll infinito automático) seguido del texto y botón.
> ¿Quieres formar parte de nuestra comunidad?  
> Descubre el proceso de admisión para el curso 2026–2027 y da el primer paso.

---

## Quiénes somos (`/quienes-somos`)

**Tag:** El colegio  
**Subtitle:** Más de 60 años al servicio de la sociedad mallorquina, bajo los principios de la Orden Teatina.

### Director
Pablo Guerrero Pacheco, C.R. — Orden Teatina (Clérigos Regulares)

### Misión
> Nos comprometemos a formar personas con dimensión trascendente, integrando instrucción, fe, sentido cristiano de la vida y valores humanos, dentro de un marco de respeto máximo a cada persona. Tenemos el futuro de 1.740 alumnos en nuestras manos, y eso nos exige rigor, vocación y compromiso cada día.

### Visión
> "El futuro de una sociedad se forja en la educación de las nuevas generaciones."  
> Somos un colegio con más de 60 años de historia, vinculado a la Orden Teatina y al servicio de la sociedad mallorquina desde nuestros inicios.

### Valores
| Título | Descripción |
|---|---|
| Compromiso cristiano | Educación fundamentada en el Evangelio y los valores de la Orden Teatina. |
| Respeto | Respeto a las personas, las ideas y el medio ambiente como base de la convivencia. |
| Calidad educativa | Excelencia académica con metodologías actualizadas y atención a la diversidad. |
| Voluntariado | Asociación de Voluntarios San Cayetano: responsabilidad y compromiso social. |
| Excelencia lingüística | Trilingüismo real: castellano, catalán e inglés en todos los niveles. |
| Comunidad | Una comunidad educativa unida: familias, docentes y alumnos comprometidos. |

### Redes
- Sanca TV: http://www.sanca.tv
- Instagram: https://www.instagram.com/sancayetanopalma/
- Facebook: https://www.facebook.com/Colegio-San-Cayetano-Palma-de-Mallorca-100322058504103

---

## Información (`/informacion`)

**Subtitle:** Todo lo que necesitas saber sobre el funcionamiento del colegio: horarios, servicios, normativa y recursos para el curso 2025–2026.

### Bloques de información
| Sección | Contenidos |
|---|---|
| Calendario y horarios | Horario lectivo, Calendario escolar 2025–2026, Calendario académico |
| Servicios | Transporte escolar, Comedor, Libros y material escolar |
| Financiero | Costes de enseñanza, Bonificaciones y ayudas |
| Académico y tecnológico | Modelo One to One, Inglés en el colegio, Bachillerato Internacional (IB) |
| Administrativo | Uniformidad, Plataforma Alexia, Renovación de matrícula, Grupos y clases |
| Próximo curso 2026–2027 *(destacado)* | Información para el próximo curso, Proceso de admisión |

Portal completo: https://sites.google.com/csc.edu.es/csc22esp-informacionyadmisione/informaci%C3%B3n-general

---

## Admisiones (`/admisiones`)

**Subtitle:** Te acompañamos en el proceso de incorporación al Colegio San Cayetano. Aquí encontrarás toda la información para el curso 2026–2027.

### Pasos del proceso
1. **Solicitud** — Rellena el formulario de preinscripción antes del plazo establecido.
2. **Documentación** — Entrega la documentación requerida en secretaría o por Oficina Virtual.
3. **Resolución** — La comisión de admisiones evalúa las solicitudes según los criterios oficiales.
4. **Matrícula** — Una vez admitido, formaliza la matrícula en el plazo indicado.

### Etapas con plazas disponibles
Escoleta · Infantil · Primaria · Secundaria · Bachillerato · IB

### Accesos
- Información y formularios: https://sites.google.com/csc.edu.es/csc22esp-informacionyadmisione/admisi%C3%B3n
- Oficina Virtual: https://sites.google.com/csc.edu.es/csc22esp-oficinavirtual

---

## Oficina Virtual (`/oficina-virtual`)

**Subtitle:** Accede a todos los servicios y plataformas digitales del Colegio San Cayetano desde un solo lugar.

| Herramienta | Descripción | URL |
|---|---|---|
| Trámites Online | Todos los trámites administrativos del colegio de forma digital. | https://sites.google.com/csc.edu.es/csc22esp-oficinavirtual |
| Alexia (Familias) | Plataforma de comunicación entre familias y el colegio: notas, ausencias, avisos. | https://web2.alexiaedu.com/ACWeb/LogOn.aspx?key=bhaA17N5NZc%3d |
| IB-ManageBac | Gestión académica para alumnos del Programa Diploma IB. | https://colegiosancayetano.managebac.com/ |
| Canal de denuncias | Canal seguro y confidencial para comunicar irregularidades. | https://whistleblowersoftware.com/secure/csc |
| Trabaja con nosotros | Envía tu candidatura para unirte al equipo. | https://forms.gle/WXyGe2xq6AtCfqBf8 |
| IAQSE-GESAVA | Intranet de la Conselleria d'Educació de les Illes Balears. | https://intranet.caib.es/xesavafront-pub/ |

---

## Etapas educativas

### Escoleta (`/etapas/escoleta`)
**Edades:** 1–2 años  
**Subtitle:** La primera etapa educativa para los más pequeños, de 1 a 2 años. Un espacio de descubrimiento, afecto y desarrollo en un entorno seguro y estimulante.

| Característica | Descripción |
|---|---|
| Ambiente seguro | Espacios diseñados para el bienestar y la exploración libre de los bebés. |
| Atención personalizada | Ratios reducidas para garantizar la atención individual de cada niño. |
| Desarrollo integral | Estimulamos el desarrollo motor, cognitivo, emocional y social desde el principio. |

**Clases y aulas virtuales:**
- 1 Año A / 1 Año B
- 2 Años A / 2 Años B / 2 Años C

Instagram Escoleta: https://www.instagram.com/escoletasancayetano/

---

### Infantil (`/etapas/infantil`)
**Edades:** 3–5 años  
**Subtitle:** De 3 a 5 años. Una etapa fundamental donde los niños desarrollan su autonomía, creatividad y bases del aprendizaje en un ambiente lúdico y estimulante.

| Característica | Descripción |
|---|---|
| Aprendizaje lúdico | El juego como motor del aprendizaje en todas sus dimensiones. |
| Trilingüismo | Iniciación al castellano, catalán e inglés desde los 3 años. |
| Valores | Educación emocional y convivencia como pilares del día a día. |

**Clases:** 3 Años (A/B/C/D) · 4 Años (A/B/C/D) · 5 Años (A/B/C/D)  
Portal: https://sites.google.com/csc.edu.es/csc22esp-infantil

---

### Primaria (`/etapas/primaria`)
**Edades:** 6–11 años  
**Subtitle:** De 6 a 11 años. Una etapa clave para construir los fundamentos académicos, sociales y personales con rigor, creatividad y valores.

| Característica | Descripción |
|---|---|
| Modelo 1 a 1 | Cada alumno con su dispositivo para un aprendizaje digital integrado. |
| Segunda lengua | Inglés intensivo y catalán/castellano como lenguas vehiculares. |
| Excelencia | Proyecto educativo riguroso con atención a la diversidad. |
| Convivencia | Programa de valores, mediación y cultura del respeto. |

**Clases disponibles en la web:** 1º Primaria (A/B/C/D/E) · 2º Primaria (A/B/C/D/E)  
Portal: https://sites.google.com/csc.edu.es/csc22esp-primaria

---

### Secundaria (`/etapas/secundaria`)
**Edades:** 12–15 años  
**Subtitle:** De 12 a 15 años. Una etapa de crecimiento personal y académico donde los alumnos desarrollan pensamiento crítico, autonomía y proyecto de vida.

| Característica | Descripción |
|---|---|
| Proyectos de investigación | Metodología por proyectos para desarrollar competencias del siglo XXI. |
| Segunda lengua extranjera | Inglés y una segunda lengua extranjera integradas en el currículo. |
| Orientación académica | Acompañamiento personalizado para la elección de futuro académico. |

Portal: https://sites.google.com/csc.edu.es/csc22esp-secundaria  
Biblioteca: https://biblioteca.colegiosancayetano.com/

---

### Bachillerato (`/etapas/bachillerato`)
**Edades:** 16–17 años  
**Subtitle:** Preparación universitaria de excelencia con fuerte componente en inglés, investigación y orientación vocacional.

| Característica | Descripción |
|---|---|
| Inglés en Bachillerato | Asignaturas impartidas en inglés para una formación internacional sólida. |
| Proyectos de Investigación | Asignatura específica para desarrollar metodología científica y pensamiento crítico. |
| Orientación universitaria | Apoyo y asesoramiento para el acceso a la universidad en España y el extranjero. |

Portal: https://sites.google.com/csc.edu.es/csc22esp-bachillerato  
Biblioteca: https://biblioteca.colegiosancayetano.com/

---

### IB — Bachillerato Internacional (`/etapas/ib`)
**Subtitle:** El Programa Diploma del IB es un currículo internacional de dos años reconocido por las mejores universidades del mundo. Rigor académico, pensamiento crítico y perspectiva global.

> El Bachillerato Internacional (IB) es un programa educativo de reconocimiento mundial para alumnos de 16 a 19 años. Combina asignaturas académicas, investigación independiente y formación ética.
>
> Los alumnos estudian seis asignaturas en dos niveles (Normal y Superior), junto con los tres componentes centrales del IB: Teoría del Conocimiento (TOK), Monografía y CAS (Creatividad, Actividad, Servicio).
>
> El Diploma IB es reconocido por universidades en más de 75 países.

| Componente | Descripción |
|---|---|
| Reconocimiento global | Aceptado por más de 2.000 universidades en 75 países. |
| Monografía | Investigación independiente de 4.000 palabras en profundidad. |
| TOK | Teoría del Conocimiento: pensamiento crítico y filosófico. |
| CAS | Creatividad, Actividad y Servicio: formación integral. |

Portal IB: https://sites.google.com/csc.edu.es/csc22esp-ibprograma  
ManageBac: https://colegiosancayetano.managebac.com/

---

## Comedor (`/comedor`)

**Subtitle:** Servicio de comedor escolar con menús saludables y equilibrados, elaborados con criterios nutricionales y adaptados a las necesidades de cada etapa.

| Característica | Descripción |
|---|---|
| Menús equilibrados | Dietas variadas y nutritivas adaptadas a cada franja de edad. |
| Alimentos frescos | Producto fresco de temporada con criterios de calidad y sostenibilidad. |
| Necesidades especiales | Menús adaptados para alergias, intolerancias y necesidades dietéticas específicas. |

Portal del Comedor: https://sites.google.com/csc.edu.es/csc22esp-comedor

---

## Extraescolares (`/extraescolares`)

**Subtitle:** Amplia oferta de actividades para el desarrollo de talentos, habilidades y aficiones fuera del horario lectivo.

| Categoría | Descripción |
|---|---|
| Deportes | Fútbol, baloncesto, natación, tenis y más actividades deportivas para todos los niveles. |
| Artes | Teatro, música, danza, pintura y actividades creativas que potencian la expresión. |
| Tecnología | Robótica, programación y talleres digitales para los más curiosos. |

---

### Escuelas de Verano (`/extraescolares/verano`)

**Subtitle:** Programa de verano para que los más pequeños disfruten, aprendan y se relacionen durante los meses de julio y agosto.

| Programa | Edades | Descripción |
|---|---|---|
| Summer Escoleta | 1–2 años | Un verano lleno de juego, afecto y exploración sensorial. |
| Summer Infantil | 3–5 años | Actividades lúdicas y educativas para alumnos de Educación Infantil. |
| Summer Primaria | 6–11 años | Talleres, deporte y aventura para alumnos de Primaria. |

Horarios, fechas y precios: contactar con secretaría.

---

## Contacto (`/contacto`)

**Subtitle:** Estamos en Palma de Mallorca. Escríbenos, llámanos o pásate por secretaría.

| Canal | Valor |
|---|---|
| Dirección | Av. Picasso, 21, 07014 Palma de Mallorca, Islas Baleares |
| Teléfono | 971 22 05 75 |
| Email | csc@colegiosancayetano.com |
| Google Maps | https://maps.google.com/?q=Av.+Picasso,+21,+07014+Palma+de+Mallorca |

**Formulario de contacto — asuntos disponibles:**
Admisiones · Información general · Comedor · Extraescolares · Otro

**Redes sociales:**
- Instagram colegio: https://www.instagram.com/sancayetanopalma/
- Instagram Escoleta: https://www.instagram.com/escoletasancayetano/
- Facebook: https://www.facebook.com/Colegio-San-Cayetano-Palma-de-Mallorca-100322058504103
- Sanca TV: http://www.sanca.tv

---

## Pastoral

Enlace externo: https://sites.google.com/csc.edu.es/cs22esp-pastoral

---

## Imágenes (`public/fotos/`)

| Archivo | Uso |
|---|---|
| `sombreado.png` | Hero home (logo + nombre + ubicación en blanco) |
| `fondo.png` | Fondo PageHero páginas interiores |
| `pablo.png` | Foto director Pablo Guerrero Pacheco |
| `escoleta.jpg` | Tarjeta etapa Escoleta |
| `infantil.jpg` | Tarjeta etapa Infantil |
| `primaria.png` | Tarjeta etapa Primaria |
| `secundaria.jpg` | Tarjeta etapa Secundaria |
| `bachillerato.jpg` | Tarjeta etapa Bachillerato |
| `IB.jpg` | Sección IB home + mega menú IB |
| `actos.jpg` | Mega menú Quiénes somos |
| `noticias1.png` | Noticia 1 (Diario de Mallorca, abril 2026) |
| `noticias2.jpg` | Noticia 2 (Ultima Hora, abril 2026) |
| `noticias3.png` | Noticia 3 (Diario de Mallorca, febrero 2026) |

---

## Header y navegación

### Menú desktop
- Mega menú full-width con dos columnas de texto + foto a la derecha
- Cada sección del menú tiene su propia foto (ver `imageKey` en `Header.tsx`)
- Texto de nav en `text-base` (antes `text-sm`)
- Orden nav: Quiénes somos · Etapas · Pastoral · **Admisiones** · Idioma
- "Información" movida al submenú de Quiénes somos (segunda opción)
- Selector de idioma: icono globo + texto "Idioma" (permanente, sin bandera)
- Idiomas disponibles: Español, Català, English, Deutsch

### Menú móvil
- Pantalla completa, desliza desde la derecha
- Items aparecen en cascada de arriba a abajo
- Icono `+` que rota a `×` al expandir secciones
- Footer azul con accesos directos a Admisiones y Contacto
- Scroll del fondo bloqueado mientras el menú está abierto

### Widget flotante — Contáctanos
- Botón circular absolute bottom-left dentro del hero: solo icono chat (sin texto)
- Al hacer clic abre panel estilo chat a la izquierda con formulario completo (nombre, email, asunto, mensaje)
- Header del panel muestra logo del colegio + "¿En qué podemos ayudarte?"
- Tras enviar muestra confirmación con tick verde
- Componente: `components/FloatingContact.tsx`

### Footer
- Teléfono con icono de teléfono inline a la izquierda del número

### Mapa Google Maps — Contacto
- Embed iframe de Google Maps añadido en `/contacto` dentro del bloque de dirección
- URL: `https://maps.google.com/maps?q=Av.+Picasso,+21,+07014+Palma+de+Mallorca&output=embed`

---

## URLs externas de referencia

| Recurso | URL |
|---|---|
| Web original del colegio | https://www.colegiosancayetano.com/ |
| Biblioteca | https://biblioteca.colegiosancayetano.com/ |
| Alexia familias | https://web2.alexiaedu.com/ACWeb/LogOn.aspx?key=bhaA17N5NZc%3d |
| ManageBac IB | https://colegiosancayetano.managebac.com/ |
| Sanca TV | http://www.sanca.tv |
| Canal de denuncias | https://whistleblowersoftware.com/secure/csc |
| Trabaja con nosotros | https://forms.gle/WXyGe2xq6AtCfqBf8 |
| IAQSE-GESAVA | https://intranet.caib.es/xesavafront-pub/ |
