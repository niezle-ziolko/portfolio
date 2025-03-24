import Image from 'next/image';

export default function Projects() {
  return(
    <table>
      <tbody>
        <tr>
          <td>
            <Image src='/images/niezle-ziolko.webp' width={150} height={84} alt='niezłe ziółko'/>
          </td>
        </tr>
      </tbody>
    </table>
  );
};