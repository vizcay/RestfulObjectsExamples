require_relative '../spec_helper'

describe Grafo do
  before :each do
    RestfulObjects::DomainModel.current.reset_objects
  end

  it 'should solve simple dependency problem' do
    graph = Grafo.new
    a = graph.agregar_nodo('A')
    b = graph.agregar_nodo('B')
    c = graph.agregar_nodo('C')

    b.dependencias << a
    c.dependencias << b

    expect(graph.ordenamiento_topologico.map { |n| n.nombre }).to eq ['A', 'B', 'C']
  end

  it 'should solve branch dependency problem' do
    graph = Grafo.new
    a  = graph.agregar_nodo('A')
    b  = graph.agregar_nodo('B' ); b.dependencias  << a
    b1 = graph.agregar_nodo('B1'); b1.dependencias << b
    b2 = graph.agregar_nodo('B2'); b2.dependencias << b
    c  = graph.agregar_nodo('C' ); c.dependencias  << b2

    sort = graph.ordenamiento_topologico.map { |n| n.nombre }

    expect(sort.index('A')).to  eq 0
    expect(sort.index('B')).to  eq 1
    expect(sort.index('B1')).to be > sort.index('B')
    expect(sort.index('B2')).to be > sort.index('B')
    expect(sort.index('B2')).to be < sort.index('C')
    expect(sort.index('C')).to  be > sort.index('B2')
  end
end

