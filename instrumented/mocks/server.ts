function cov_1uveu1hjjl() {
  var path = "D:\\RSS\\react-rss\\src\\mocks\\server.ts";
  var hash = "1c635623cb0eaee4b09dd365a340408d90bb2b94";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\RSS\\react-rss\\src\\mocks\\server.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 46
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1c635623cb0eaee4b09dd365a340408d90bb2b94"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1uveu1hjjl = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1uveu1hjjl();
import { setupServer } from 'msw/node';
import { handlers } from './handlers';
export const server = (cov_1uveu1hjjl().s[0]++, setupServer(...handlers));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXV2ZXUxaGpqbCIsImFjdHVhbENvdmVyYWdlIiwic2V0dXBTZXJ2ZXIiLCJoYW5kbGVycyIsInNlcnZlciIsInMiXSwic291cmNlcyI6WyJzZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0dXBTZXJ2ZXIgfSBmcm9tICdtc3cvbm9kZSc7XHJcbmltcG9ydCB7IGhhbmRsZXJzIH0gZnJvbSAnLi9oYW5kbGVycyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmVyID0gc2V0dXBTZXJ2ZXIoLi4uaGFuZGxlcnMpO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLFNBQVNFLFdBQVcsUUFBUSxVQUFVO0FBQ3RDLFNBQVNDLFFBQVEsUUFBUSxZQUFZO0FBRXJDLE9BQU8sTUFBTUMsTUFBTSxJQUFBSixjQUFBLEdBQUFLLENBQUEsT0FBR0gsV0FBVyxDQUFDLEdBQUdDLFFBQVEsQ0FBQyJ9