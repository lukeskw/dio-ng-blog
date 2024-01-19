export const mockData:data[] = [
  {
    id: '1',
    photoCover: 'https://miro.medium.com/v2/resize:fit:851/1*kAII9-13lufRkNegTdhqzA.jpeg',
    title: 'Clean Code: Boas práticas de programação',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias debitis animi maxime consequuntur nostrum similique'
  },
  {
    id: '2',
    photoCover: 'https://hyc-red.oss-cn-chengdu.aliyuncs.com/clean-architecture/clean-arch.jpeg',
    title: 'Sic parvis magna',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias debitis animi maxime consequuntur nostrum similique, doloremque explicabo dolor perspiciatis.'
  },
  {
    id: '3',
    photoCover: 'https://etimg.etb2bimg.com/photo/100088163.cms',
    title: 'Scientia potentia est',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias debitis animi maxime consequuntur nostrum similique, doloremque explicabo dolor perspiciatis repellat officiis alias corporis porro sint fuga.'
  },
  {
    id: '4',
    photoCover: 'https://e0.pxfuel.com/wallpapers/691/707/desktop-wallpaper-morgan-codes-minimal-minimalist-code.jpg',
    title: 'Omne initium difficile est',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit laboriosam autem officiis! Nemo praesentium voluptate aliquam error porro velit minima eos officiis tenetur id quaerat, minus ipsum labore corrupti.'
  },
]

export type data = {
  id:string;
  photoCover:string;
  title:string;
  description:string;
}
