//Layouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/paste/Home';
import Following from '~/paste/Following';
import Profile from '~/paste/Profile';
import Upload from '~/paste/Upload';
import Search from '~/paste/Search';
//public route
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile, layout: null },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
