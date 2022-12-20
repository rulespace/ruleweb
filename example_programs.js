export const reachable = `
(rule [Reachable x y] [Link x y])
(rule [Reachable x y] [Reachable x z] [Link z y])

(rule [Link 1 2])
(rule [Link 2 3])
`;
