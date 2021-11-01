import Pessoa from '../../components/Pessoa'

export default function exemploTs() {
  return (
    <div>
      <Pessoa nome="William" />
      <Pessoa nome="Maria" idade={19} />
    </div>
  )
}
