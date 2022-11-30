/* eslint-disable no-trailing-spaces */
/* eslint-disable object-property-newline */
import { Caso2 } from './types/PrimerosAuxilios'

export const problemas: Caso2[] = [
  { 
    titulo: 'Paro cardio-respiratorio', contenido: `
## Pasos:
1. Llamar al 911
2. Identificar que la persona realmente está en un paro cardio-respiratorio. Esto se hace revisando si hay presencia o no del pulso en el paciente (Se colocan dedo índice y medio a nivel de la tráquea o manzana de adán y aproximadamente dos dedos a la derecha ejerza una ligera presión para detectar pulsaciones). Si el paciente si tiene pulso y solo dejó de respirar, primero abra la vía aérea del paciente (inclinando ligeramente hacia atrás la cabeza del paciente y levantando su mentón), identifique si dentro de la cavidad bucal de la persona existe algún objeto obstruyendo el paso del aire, en caso de que así sea, tratar de retirarlo con el dedo con cuidado de que el paciente no cierre la boca para evitar ser mordido (Si no es posible retirarlo, utilizar la maniobra de Heimlich para inducir el vómito). Si no hay ningún objeto obstruyendo, comenzar a insuflar al paciente (si no se cuenta con equipo, se puede utilizar la respiración boca a boca con el uso de un cubrebocas) ejerciendo una insuflación cada 5 segundos hasta que llegue la ambulancia o el personal capacitado para atender a su paciente. Si es posible, contar el tiempo que la persona tiene sin respirar.
3. Trazar una línea imaginaria de tetilla a tetilla del paciente y otra por la línea media del esternón y en el punto donde se intersectan ambas líneas colocar ambas manos entrelazadas con el talón de la mano sobre el punto de intersección (con la mano dominante por debajo y con la palma abierta y la otra abrazándola por encima) y comenzar a comprimir a una profundidad de 5 o 6 cm o 1/3 del de la profundidad del tórax. Esto hacerlo hasta que el personal solicitado llegue a auxiliarlo o hasta que esté lo suficientemente cansado para continuar (en caso de que así sea, puede buscar a una persona para que lo supla), ya que, si está demasiado cansado, las compresiones dejan de ser efectivas.Trazar una línea imaginaria de tetilla a tetilla del paciente y otra por la línea media del esternón y en el punto donde se intersectan ambas líneas colocar ambas manos entrelazadas con el talón de la mano sobre el punto de intersección (con la mano dominante por debajo y con la palma abierta y la otra abrazándola por encima) y comenzar a comprimir a una profundidad de 5 o 6 cm o 1/3 del de la profundidad del tórax. Esto hacerlo hasta que el personal solicitado llegue a auxiliarlo o hasta que esté lo suficientemente cansado para continuar (en caso de que así sea, puede buscar a una persona para que lo supla), ya que, si está demasiado cansado, las compresiones dejan de ser efectivas.
#### Especificaciones:
    - Frecuencia: 100 a 120 veces por minuto.
    - Ciclo adecuado de RCP: 30 compresiones, 2 insuflaciones, 5 veces (o hasta que llegue el personal adecuado a realizar la valoración adecuada).
    - Minimice las interrupciones
    - Arrodillarse completamente en el suelo.
    - Mantenerse siempre con la espalda recta.
    - Utilizar su peso corporal sobre el paciente para facilitar las compresiones. 
    - Si sobrepasa el peso, estatura, fuerza y complexión de la persona por mucho, utilizar solo una mano en las compresiones para evitar un daño mayor en el paciente.
  
  `, peligro: true, linkImagen: 'https://www.mutuauniversal.net/export/sites/webpublica/.galleries/Promocion_salud/cancer-de-piel.jpg', numeroEmergencia: '911' 
  },
  
  { 
    titulo: 'Heridas', contenido: `
## Introduccion
En general existen distintos tipos de heridas (Cortantes, punzantes, lacerantes, avulsivas, abrasivas, penetrantes, doble penetrantes, amputaciones, etc.), pero la mayoría llevan el mismo tipo de tratamiento…
1. Identificar si la herida es grave o no. No existe un parámetro adecuado para determinar si una herida es grave o no, de hecho, cualquier herida por pequeña que sea puede llegar a ser mortal, pero si el paciente no la identifica como grave, se puede evitar el traslado al hospital. Si se cree necesario, llamar al 911 o trasladar al hospital por sus propios medios.
2. Identificar hemorragias. Esto se hace solo revisando si hay una salida de sangre o no, en caso de que si, identificar si es hemorragia venosa, arterial o capilar; si la hemorragia es venosa, la sangre se verá de un color un poco oscuro (marrón) y la salida de sangre será constante, si es arterial, la sangre será de un color rojo brillante, y saldrá al ritmo de las pulsaciones del corazón y si es capilar, saldrá de manera constante, pero se verán puntos rojos sobre la piel.
3. Limpiar la herida para poder cubrirla (esto solo en caso de que no exista una hemorragia masiva). La limpieza apropiada de una herida, solo se puede hacer apropiadamente en un hospital o centro médico ya que se aplican ciertos antisépticos para evitar infecciones, pero lo que puede hacerse para desinfectar normalmente es primeramente mojar un poco la herida para después ser frotada con jabón o isodine (con movimientos circulares) y finalmente enjuagar con agua. Si existe una hemorragia masiva, controlar la hemorragia ejerciendo presión con gasas, apósitos o pañuelos estériles sobre la herida hasta que ya no se identifique sangre sobre el objeto con el que estás ejerciendo presión, si identifica sangre sobre la gasa o apósito colocado, colocar otro y otro por encima del anterior hasta que ya no sea vista.
4. Cubrir la herida. En el caso de que sea con una hemorragia masiva, colocar un vendaje compresivo sobre las gasas colocadas, esto solo si la hemorragia ya ha sido controlada, en caso de que no, solo seguir ejerciendo presión hasta llegar al hospital. Si no existe una hemorragia masiva, solo cubrir con una gaza estéril y vendar de forma comprensiva por encima de la gaza para evitar que cualquier objeto entre en contacto directo con la herida.
>Si existe un objeto empalado sobre la herida (cuchillos, palos, picahielos, pinzas, etc.), no retirar el objeto, simplemente vendar por alrededor de la herida y el objeto para inmovilizarlo, tratar de mover el objeto lo menos posible y trasladar al hospital lo más pronto posible.
  `, peligro: false, linkImagen: 'https://us.123rf.com/450wm/maxborovkov/maxborovkov0904/maxborovkov090400014/4610572-mujeres-de-palma-con-la-sangre-vector-.jpg?ver=6', numeroEmergencia: '911' 
  },
  
  {
    titulo: 'Ataques epilépticos (convulsiones)', contenido: `
## Introduccion
Durante un ataque epiléptico realmente no hay mucho que hacer con el paciente, ya que tocarlo, sostenerlo o inmovilizarlo perjudicaría aún más el estado de paciente ocasionando lesiones más severas como lo son, fracturas, golpes, esguinces, etc. Esto solo por la fuerza del movimiento que ejerce la contractibilidad corporal…
1. Retirar cualquier objeto de alrededor con los que el paciente pueda llegar a lastimarse. En caso de que esté anclado o amarrado a algún objeto, retirar el amarre y si es posible colocar una almohada, sudadera, o prenda por debajo de la cabeza del paciente con extremo cuidado (evitar prendas con zipper), esto para que pueda amortiguar los golpes del cráneo contra la superficie.
>NOTA: Evite colocar cualquier tipo de objeto en la boca del paciente, es poco probable que se lastimen los elementos de la cavidad bucal por si solos durante una convulsión.
2. Tomar el tiempo de duración de la convulsión (este parece ser un dato inútil para cualquier persona, pero es un dato extremadamente importante para el médico tratante o neurólogo que lleve su caso) e identificar la cantidad de convulsiones que ha tenido (se refiere a si es la primera vez que tiene este tipo de ataque o si le suceden con regularidad) ya sea con un familiar o persona que lo acompañe.
3. Cuando se hayan detenido las convulsiones, elevar las piernas para ayudar al flujo y presión sanguínea, tapar al paciente con una manta y desabrochar cualquier cosa que ejerza presión sobre el paciente (Tenis, cinturones, pulseras, collares, aretes, etc.), todo esto para evitar un estado de shock y prepararse para un próximo ataque que puede ser muy posible.
4. Llamar al 911 o trasladar a la persona por sus propios medios solo si es la primera vez que sufre convulsiones o la primera vez en mucho tiempo, si las convulsiones son demasiado constantes (fuera de los ciclos que la persona normalmente frecuenta) o si la convulsión dura más de 5 minutos. Esto con el fin de evitar un déficit neurológico mayor.
  `, peligro: false, linkImagen: 'https://img.europapress.es/fotoweb/fotonoticia_20170222071442_1200.jpg', numeroEmergencia: '911' 
  },  
  
  {
    titulo: 'Quemaduras', contenido: `
## Introduccion
Las Quemaduras son algo muy común en cualquier ámbito, por lo que es muy importante conocer el tratamiento adecuado para cualquier tipo de quemadura.
1. Identificar el tipo de quemadura para poder adecuar el tratamiento:
    - **1er Grado**: Suelen sanar por si solas en aproximadamente 1 semana, ya que sólo dañan la capa exterior de la piel (epidermis), un ejemplo de estas son las quemaduras de piel. Causan dolor, enrojecimiento e hinchazón.
    - **2do Grado:** Dañan la epidermis y la capa por debajo de esta (dermis). Pueden requerir injertos de piel y así mismo pueden dejar cicatrices. Causan dolor, enrojecimiento, hinchazón y ampollas.
    - **3er Grado:** Dañan o destruyen ambas capas de piel y así mismo las capas profundas de esta. También se les llaman quemaduras de espesor total. Causan piel blanquecina, oscura o quemada y puede estar adormecida la zona afectada.
    - **4to Grado:** Quemaduras por electricidad. Por lo regular llegan a existir orificios de entrada y salida eléctrica con presencia de necrosis (Color negro en la zona afectada) que indica muerte celular.
2. Ya identificada el tipo de quemadura, hay que identificar si es motivo de traslado o no
    * Quemaduras de tercer grado.
    * Quemaduras de segundo grado de más de 5 o 7 cm de ancho.
    * Quemaduras de segundo grado en las manos, pies, ingle, glúteos, o sobre articulaciones importantes.
    * Quemaduras de cuarto grado.
3. Una vez identificado si es motivo de traslado, llamar al 911 o trasladar a un hospital por sus propios medios.
    * Todas las quemaduras de 2º hasta 4º grado deben ser tratadas con agua corriente o bien con gasas o pañuelos estériles húmedos (humedecidos con agua fresca o al tiempo) sobre la quemadura hasta llegar a su centro médico.
    * Las quemaduras de 1er grado pueden curarse por si solas o bien puede aplicar algún ungüento o crema humectante recomendada por su médico.  
  `, peligro: false, linkImagen: 'https://st2.depositphotos.com/1177973/6396/i/950/depositphotos_63963825-stock-photo-horrible-burns-on-female-hand.jpg', numeroEmergencia: '911' 
  },

  {
    titulo: 'Fracturas', contenido: `
## Introduccion
En el caso de cualquier fractura, se lleva el mismo tipo de tratamiento ya que la mayoría de estas necesitan un manejo quirúrgico…
1. Llamar al 911 ya que cualquier fractura requiere ser tratada por un médico.
2. En lo que esperas la ambulancia, identificar el lugar de la fractura; Esto se hace palpando con un poco de presión sobre donde se sospeche que es el lugar de la fractura (solo si la fractura es interna, si es expuesta no palpar).
3. Ya identificada la fractura tratar de inmovilizar la fractura con una férula improvisada, se pueden utilizar cualquier tipo de objeto rígido y amarres con cinturones y cintas para sujetarlo o sostenerlo y así evitar el movimiento. Si la fractura es expuesta, no tratar de acomodar el hueso en su lugar, simplemente inmovilizar y evitar tocar el hueso expuesto del paciente para evitar cualquier tipo de infección, ya que una infección ósea es algo que le puede llevar al paciente a una vida de operaciones y tratamientos
  `, peligro: false, linkImagen: 'https://edfdhhnqiuw.exactdn.com/wp-content/uploads/2020/05/distal-radius-fracture.png', numeroEmergencia: '911' 
  }
  
]
