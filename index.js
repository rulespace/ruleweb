import * as programs from './example_programs.js'; // used reflectively

import { compileToRsp, Lit, Atom} from '@rulespace/rulespace';
export { instance2graph, compileToConstructor } from '@rulespace/rulespace';

// *** from test-common
export function compileAtoms(src)
{
  const rsp = compileToRsp(src);
  return rsp.rules.map(rule => rule.head);
}

export function atomToFreshModuleTuple(module, atom)
{

  function attrToValue(attr)
  {
    if (attr instanceof Lit)
    {
      return attr.value;
    }
    if (attr instanceof Atom)
    {
      return atomToFreshModuleTuple(module, attr);
    }
    return attr;
  }

  return new module[atom.pred](...atom.terms.map(attrToValue));
}
// ***

